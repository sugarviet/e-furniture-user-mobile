import { useFetchWithAuth } from "../hooks/api-hooks";
import { useLocalSearchParams } from 'expo-router';
export const withFetchDataWithAuth = (WrappedComponent, getApi) => {
  return (props) => {
    const params = useLocalSearchParams();

    const { data, isLoading } = useFetchWithAuth(getApi(params));

    if (isLoading) return;
    return <WrappedComponent {...props} data={data} />;
  };
};
