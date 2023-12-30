export function generateMetadata() {
  return {
    title: 'Login',
  }
}

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="bg-zinc-900 border-1 border-zinc-500 rounded-sm gap-4 p-4 w-[360px]">
        <h1 className="text-sm text-center">Sign In</h1>
      </div>
    </div>
  )
}
