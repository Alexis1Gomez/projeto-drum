import { Suspense } from "react"; 
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";


export default async function DatailPost({
    params
}: {
    params: Promise<{id: string}>
}) {

    const {id} = await params 

    return(
        <div>
            <h1 className="text-4xl font-bold text-center">
                Detalles de los posts: {id}</h1>
        
            <Suspense fallback={ 
                <h1>Carregando</h1>
             }> 
                <PostInfo id={id}/>
            </Suspense> 
        </div>
    )
}