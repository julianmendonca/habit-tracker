export const getTimeFromTimestamp = (time: string) => {
	let AMPM = 'am'
	let [hour, minute] = time.split(':')
	if (hour > '12') {
		hour = (parseInt(hour) - 12).toString()
		AMPM = 'pm'
	}

	return `${hour}:${minute} ${AMPM}`
}

export const currentDate = () => new Date().toISOString().split('T')[0]

export const getCurrentTime = () => {
	const date = new Date()
	const hour = date.getHours()
	const minute = date.getMinutes()

	return `${hour}:${minute}`
}

export const getCurrentTimez = () => {
	var x = new Date().getTimezoneOffset() * 60000
	var localISOTime = new Date(Date.now() - x).toISOString().slice(0, -1)
	return localISOTime.split('T')[1]
}
