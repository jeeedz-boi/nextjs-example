import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid, foo } = router.query

  return <p>Post: {pid} Foo: {foo} </p>
}

export default Post