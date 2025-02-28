


interface PostProps {
    id : number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

// Server components 
export default async function PostsPage(){

    

    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps  = await response.json()

    async function handleFetchPosts() {
        'use server'
        const response = await fetch('https://dummyjson.com/posts')
        const data: ResponseProps  = await response.json()

        console.log(data.posts)
    }

    return(
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3x1">Todos os Posts</h1>

            <button onClick={handleFetchPosts}>
                Buscar Posts
            </button>

            <div className="flex flex-col gap-4 mx-2">
                {
                    data.posts.map(post => (
                        <div key={post.id} className="bg-gray-200 p-4 rouned-md">
                            <h2 className="font-bold">{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
                
            </div>

            
        </div>
    )
}
