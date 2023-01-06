import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';
const Create = () => {
  const [image,setImage] = useState(null);
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const {firebase} = useContext(FirebaseContext);
    const {user} = useContext(AuthContext);
    const dateNow = new Date();
    const history = useHistory();
  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=> {
      ref.getDownloadURL().then((url)=> {
        firebase.firestore().collection('products').add({
          name,category,price,url,userId:user.uid,createdAt:dateNow.toDateString()
        })
          history.push('/');
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e)=> setName(e.target.value)}
              value={name}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e)=>setCategory(e.target.value)}
              value={category}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" onChange={(e)=>setPrice(e.target.value)}
            value={price}
            type="number" id="fname" name="Price" />
            <br />
          <br />
          <img src={image ? URL.createObjectURL(image):''} alt="Posts" width="200px" height="200px"></img>
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
