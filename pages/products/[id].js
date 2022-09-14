import { useRouter } from "next/router";

const products = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>{id}</div>
    );
}

export default products;