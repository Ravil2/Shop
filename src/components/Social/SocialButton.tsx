import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa'

export const SocialButtons = () => {
  return (
    <div className="flex items-center gap-2 mt-4 w-full flex-wrap">
      <button className="border rounded-lg p-2 flex-1 flex items-center justify-center gap-2">
        <FaFacebookF /> Facebook
      </button>
      <button className="border rounded-lg p-2 flex-1 flex items-center justify-center gap-2">
        <FaGoogle /> Google
      </button>
      <button className="border rounded-lg p-2 flex-1 flex items-center justify-center gap-2">
        <FaGithub /> GitHub
      </button>
    </div>
  )
}
