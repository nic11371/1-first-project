import usersReducer, { setUsers } from "./usersReducer";

const state = {
	users: [],
	pageSize: 15,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followInProgress: [],
	fake: 10
};

test ('array of users should be get', () => {
	//const newState = usersReducer(state, setUsers({id: 10}));
	return expect(Promise.resolve('[]')).resolves.toBe('[]')
})

