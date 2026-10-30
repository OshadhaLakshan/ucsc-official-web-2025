export default function BlogDate({ date }) {
  return <time dateTime={date}>{new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))}</time>;
}
