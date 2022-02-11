import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as BotaoEnviar } from '../../Assets/comments.svg'
import { ReactComponent as BotaoEnviando } from '../../Assets/comments-loading.svg'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments, single}) => {

const {request, error, loading} = useFetch() 
const [comment, setComment] = React.useState('');

async function handleSubmit(event){
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment})
    const {response, json} = await request(url, options)
    if(response.ok) {
        setComment('');
        setComments((comments) => [...comments, json])
    }
}

  return <form onSubmit={handleSubmit} className={`${styles.form} ${single ? styles.single : ''}`}>
      <textarea
      className={styles.textarea}
      id='comment'
      name='comment' 
      placeholder='Deixe seu comentário...'
      value={comment} 
      onChange={({target}) => setComment(target.value)}/>
      {loading ? <button className={styles.buttonLoading}><BotaoEnviando/></button> : <button className={styles.button}><BotaoEnviar/></button>}
          
      <Error error={error}/>
  </form>;
};

export default PhotoCommentsForm;
