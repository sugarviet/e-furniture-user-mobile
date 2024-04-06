import LoadingSpinner from "../components/LoadingSpinner";
import { useFetch } from "../hooks/api-hooks";
import { useLocalSearchParams } from "expo-router";
export const withFetchData = (WrappedComponent, getApi) => {
  return (props) => {
    const params = useLocalSearchParams();
    const { data, isLoading } = useFetch(getApi(params));

    if (isLoading) return <LoadingSpinner />;
    return <WrappedComponent params={params} {...props} data={data} />;
  };
};
