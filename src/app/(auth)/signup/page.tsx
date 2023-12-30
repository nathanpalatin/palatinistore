export async function generateMetadata() {
  return {
    title: 'Login',
  }
}

export default function SignUp() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className="bg-zinc-900 border-1 border-zinc-500 rounded-sm gap-4 w-[360px]">
        <h1 className="text-sm text-center">Sign Up</h1>
      </div>
    </div>
  )
}
