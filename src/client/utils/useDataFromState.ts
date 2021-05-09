import { useSelector, RootStateOrAny } from 'react-redux';

const useDataFromState = (stateNode: string) => {
	return useSelector((state: RootStateOrAny) => state[stateNode]);
}

export default useDataFromState;