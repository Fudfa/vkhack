import React, { useEffect, useState } from 'react'
import './GenerateNews.css'
import $ from 'jquery'

$('.g-news-input-file input[type=file]').on('change', function(){
  let file = this.files[0];
  $(this).closest('.g-news-input-file').find('.g-news-input-file-text').html(file.name);
})

function GenerateNews() {

    const [navStatus, setNavStatus] = useState('text_loading')

    const activeStyle = {
      backgroundColor: 'rgb(0, 123, 255)',
      paddingInline: '10px',
      paddingBlock: '5px',
      borderRadius: '20px',
      marginRight: '10px',
      color: 'white',
      cursor: 'pointer'
    }

    const notActiveStyle = {
      paddingInline: '10px',
      paddingBlock: '5px',
      borderRadius: '20px',
      marginRight: '10px',
      color: 'rgb(137, 137, 137)',
      cursor: 'pointer'
    }


    useEffect(() => {
      $('.g-news-input-file input[type=file]').on('change', function(){
        let file = this.files[0];
        $(this).closest('.g-news-input-file').find('.g-news-input-file-text').html(file.name);
      })
    }, [])

    function onNavClick(status){
      setNavStatus(status)
    }

    let tags = [
        "Политика", "Животные", "Россия", "Происшествия", "Люди", "Происшествия","Люди","Происшествия","Люди","Животные","Люди","Происшествия","Люди","Животные","Люди","Происшествия","Происшествия","Люди",
    ]

    function generateStyle(){
        let colors = ["rgb(48, 182, 48)", "rgb(44, 139, 255)", "rgb(239, 43, 43)", "rgb(239, 43, 43)", "rgb(227, 58, 204)", "rgb(51, 71, 255)", "rgb(28, 213, 230)"]
        const index = Math.floor(Math.random() * colors.length)
        const color = colors[index]
        console.log(color)
        return {background: color}
    }

// input file


  return (
    <div className='g-news-container-1'>

    <div className='g-news-top-bar'>
      <span>Классификация новостей</span>
    </div>

    <div class="g-news-navigation">
      <span style={ navStatus == 'text_loading' ? activeStyle : notActiveStyle} onClick={() => onNavClick('text_loading')}>Вставьте текст</span>
      <span style={ navStatus == 'file_loading' ? activeStyle : notActiveStyle} onClick={() => onNavClick('file_loading')}>Загрузите файл</span>
    </div>

    
    { navStatus == 'text_loading' ? <textarea class='g-news-textarea'></textarea> : <></> }
    { navStatus == 'file_loading' ? 
      <form method="post" enctype="multipart/form-data">
      <label class="g-news-input-file">
            <input type="file" name="file"/>
            <span class="g-news-input-file-btn">Выберите файл</span>           
            <span class="g-news-input-file-text">Максимум 10мб</span>
       </label>
    </form>
  : <></> }

    <span className='g-news-title1'>Распознанные теги: </span>
    
    <div className='g-news-tags-container'>
    
    {
    tags.map(tag => (
        <span className='g-news-tag' style={generateStyle()}>{'# ' + tag}</span>
    ))
    }

    </div>

  <script src="load_file.js"></script>
  </div>
  );
}

export default GenerateNews;