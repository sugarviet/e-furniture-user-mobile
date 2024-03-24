import { useFetch, useFetchWithAuth } from "../hooks/api-hooks";
import { useLocalSearchParams } from 'expo-router';
export const withFetchData = (WrappedComponent, getApi) => {
  return (props) => {
    const params = useLocalSearchParams();

    const { data, isLoading } = useFetch(getApi(params));

    if (isLoading) return;
    return <WrappedComponent {...props} data={data} />;
  };
};
