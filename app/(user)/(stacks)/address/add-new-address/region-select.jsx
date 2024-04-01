import { FlatList, Text, TouchableOpacity, View } from "react-native";
import RegionSelectionStep from "../../../../../components/RegionSelectionStep";
import {
  get_district_in_saigon,
  get_ward_in_saigon,
} from "../../../../../api/addressApi";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
import { useState } from "react";
import { useUserStore } from "../../../../../stores/useUserStore";
import useNavigation from "../../../../../hooks/useNavigation";

const RegionList = ({ data, label, onSelect }) => {
  return (
    <View className="flex-1">
      <Text className="px-4 py-2 text-gray-500 text-sm">{label}</Text>
      <View className="flex-1 bg-white">
        <FlatList
          data={data}
          renderItem={({ item }) => {
            const { name } = item;
            return (
              <TouchableOpacity
                onPress={() => onSelect(item)}
                className="p-4 border-b border-gray-200"
              >
                <Text>{name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

function RegionSelectionScreen() {
  const [step, setStep] = useState(1);
  const [district, setDistrict] = useState(null);
  const { go_back } = useNavigation();
  const { setRegion } = useUserStore();

  const getLabels = () => {
    if (!district) return ["TP.Hồ Chí Minh", "Select District"];

    return ["TP.Hồ Chí Minh", district.name, "Select Ward"];
  };

  const { data: districts, isLoading: districtLoading } = useQuery(
    [get_district_in_saigon()],
    {
      queryFn: async () =>
        axios
          .get(get_district_in_saigon())
          .then((response) => response.data)
          .then((data) => data.results),
    }
  );

  const { data: wards, isLoading: wardsLoading } = useQuery(
    [get_ward_in_saigon(district?.district_id)],
    {
      queryFn: async () =>
        axios
          .get(get_ward_in_saigon(district?.district_id))
          .then((response) => response.data)
          .then((data) => data.results),
    },
    { enabled: !!district }
  );

  const STEPS = [
    {},
    {
      label: "District",
      data: districts
        ? districts.map((item) => ({ ...item, name: item.district_name }))
        : [],
      onSelect: (district) => {
        setDistrict(district);
        setStep(2);
      },
    },
    {
      label: "Ward",
      data: wards
        ? wards.map((item) => ({ ...item, name: item.ward_name }))
        : [],
      onSelect: (ward) => {
        setRegion({ province: "TP.Hồ Chí Minh", district, ward });
        go_back();
      },
    },
  ];

  return (
    <View className="flex-1">
      <RegionSelectionStep
        position={step}
        setPosition={setStep}
        labels={getLabels()}
      />
      {districtLoading || wardsLoading ? (
        <LoadingSpinner />
      ) : (
        <RegionList
          onSelect={STEPS[step].onSelect}
          label={STEPS[step].label}
          data={STEPS[step].data}
        />
      )}
    </View>
  );
}

export default RegionSelectionScreen;
