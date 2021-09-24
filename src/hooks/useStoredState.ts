import { Dispatch, SetStateAction, useState } from 'react'

export const useStoredState = <T>(
	key: string,
	initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.log(error)
			return initialValue
		}
	})

	const setValue = (value: T | ((prev: T) => T)) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.log(error)
		}
	}

	return [storedValue, setValue]
}
