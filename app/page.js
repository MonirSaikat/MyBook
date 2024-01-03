import AddNewWord from '@/components/AddNewWord';
import { getDictionary } from '@/lib/mongodb/dictionary'

async function fetchDictionary() {
  const { dictionary } = await getDictionary();
  if (!dictionary) throw new Error('Failed to fetch dictionary')
  return dictionary;
}

export default async function Home() {
  const dictionary = await fetchDictionary();

  return (
    <main>
      <AddNewWord />

      <ul className="list-group">
        {dictionary.map(word => (
          <li className="list-group-item">{word.en} : {word.bn}</li>
        ))}
      </ul>
    </main>
  )
}
