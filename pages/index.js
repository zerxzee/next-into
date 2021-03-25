import Header from '../components/Header'
import Pocas from '../components/Pocas'
import AddPoca from '../components/AddPoca'
import { useState } from 'react'

export default function Home({fetchedPocas}) {
  const [showAddButton, setshowAddButton] = useState(false);
  const [pocas, setPocas] = useState(fetchedPocas);

  const addPoca = async (poca) => {
    const res = await fetch("http://localhost:5000/pocas", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(poca),
    });

    const data = await res.json();

    setPocas([...pocas, data]);

    // const randomId = Math.floor(Math.random() * 10000) + 1
    // const newPoca = { randomId, ...poca }
    // setPocas([newPoca, ...pocas])
  };

  const deletePoca = async (id) => {
    await fetch(`http://localhost:5000/pocas/${id}`, {
      method: "DELETE",
    });
    setPocas(pocas.filter((poca) => poca.id !== id));
  };

  return (
    <>
      <Header
        title='Vinder'
        showAdd={showAddButton}
        onShowForm={() => setshowAddButton(!showAddButton)}
      ></Header>
      {showAddButton && <AddPoca onAdd={addPoca}></AddPoca>}
      {pocas && pocas.length > 0 ? (
          <Pocas pocas={pocas} onDelete={deletePoca}></Pocas>
        ) : (
          <h5>Nothing to see here</h5>
        )}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/pocas')
  const fetchedPocas = await res.json()

  return {
    props: {
      fetchedPocas
    }
  }
}