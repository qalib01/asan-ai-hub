import React, { useState } from 'react';
import cn from 'classnames';
import { Eye, EyeClosed } from 'lucide-react';


type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
    animated?: boolean;
    error?: string,
};

const Input = React.forwardRef<HTMLInputElement, Props>(
    ({ placeholder, animated = false, type, className, error, onChange, defaultValue, value, ...rest }, ref) => {
        const [showPassword, setShowPassword] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
        };

        const handleShowPassword = () => {
            setShowPassword(!showPassword);
        }

        return (
            <div className="relative w-full">
                {!animated && (
                    <label
                        htmlFor={placeholder}
                        className={'cursor-text transition-all transform text-sm font-medium origin-left'}
                    >
                        {placeholder}
                    </label>
                )}

                <input
                    ref={ref}
                    className={cn(className,
                        `peer relative w-full bg-white text-sm text-slate-700 text-sm border rounded-full px-4 py-3 placeholder:text-gray-400 transition duration-300 focus:outline-none shadow-sm focus:shadow ${type === 'password' ? 'pr-[40px]' : ''} ${error ? 'border-red-700 focus:border-red-700' : ' placeholder-transparent border-slate-200 focus:border-slate-400 hover:border-slate-400'}`
                    )}
                    type={showPassword ? 'text' : type}
                    onChange={handleChange}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={value}
                    {...rest}
                />
                {type === 'password' && (
                    <button type='button' onClick={handleShowPassword} className='absolute right-2 top-7 p-1 transition-all duration-200 cursor-pointer text-slate-400 hover:border-slate-400 focus:outline-none text-sm'>
                        {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                    </button>
                )}

                {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
export default Input;
