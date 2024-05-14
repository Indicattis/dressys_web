

interface UserProps {
    id?: string
}


export default function UserProfile({ id }: UserProps) {
    return (
        <div>
            <span>{id}</span>
        </div>
    )
}