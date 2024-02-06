interface userIdPageProps {
    params: {
        usersId: string
    };
};

const page = ({params,}: userIdPageProps) => {
    return (
        <div>User id: {params.usersId}</div>
    ); 
};

export default page;