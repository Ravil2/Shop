import { forwardRef } from 'react'

interface PasswordFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ error, ...rest }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          type="password"
          {...rest}
          className={`border p-3 rounded-lg ${
            error ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 w-full`}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    )
  },
)

PasswordField.displayName = 'PasswordField'
