import { useForm } from "react-hook-form";
import styles from "./contact.module.css";
import { useState } from "react";
import {arrayObj} from "../../stuff";

const Contact = () => {
  const [person, setPerson] = useState(null);
  const [img, setImg] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const newPokes = arrayObj;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { id, name, pokemon } = data;
    const UpName = name.toUpperCase();
    setPerson({ id, name: UpName });
    setSelectedPokemon(pokemon);

    const image = newPokes.find((element) => element.name === pokemon);
   

    if (image) {
      setImg(image.url);
    } else {
      setImg("");
    }
  };
  

  return (
    <div className={styles.wrapper}>
    {img && <img className={styles.img} src={img} />}
      

      <div className={styles.formulario}>
        <h2 className={styles.title}>POKEMON REGISTER</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            className="form-control"
            placeholder="my name here..."
            {...register("name")}
          />

          <label>Id</label>
          <input
            placeholder="my Id here..."
            className="form-control"
            {...register("id", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <label>My Pokemon is</label>
          <select
            defaultValue={"Please select a Pokemon"}
            className="form-control"
            {...register("pokemon", { required: true })}
          >
            {newPokes.map((pokemon, index) => (
              <option key={index} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </select>
          <div className="btn-group">
            <input className="btn btn-warning" type="submit" />
            <input
              onClick={() => {
                setPerson(null);
                setImg(null);
              }}
              className="btn btn-success"
              type="reset"
            />
          </div>
        </form>
        { (person && selectedPokemon) ?  <h4>THANKS FOR REGISTER {person.name}</h4> :
        <h4>PLEASE SELECT YOUR POKEMON</h4>
        
        }
      </div>
    </div>
  );
};

export default Contact;
