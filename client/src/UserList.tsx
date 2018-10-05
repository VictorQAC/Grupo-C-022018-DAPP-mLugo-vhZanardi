import * as React from 'react';

interface User {
    id: number;
    name: string;
    lastName: string
}

interface UserListProps {
}

interface UserListState  {
    users: Array<User>;
    isLoading: boolean;
}

class UserList extends React.Component<UserListProps, UserListState> {

    constructor(props: UserListState) {
        super(props);

        this.state = {
            users: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/good-users')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    render() {

        const {users, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
                <div>
                    <h2>Users List</h2>
                    {users.map((user: User) =>
                        <div key={user.id}>
                            {user.name}
                            {" " + user.lastName}
                        </div>
                    )}
                </div>
        );
    }
}

export default UserList;