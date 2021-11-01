import Link from "next/link";
import React, { Fragment, useRef, useState } from 'react';

import Bread from '../../components/Bread';
// import PointsSlider from '../components/points-slider';
import SendBtn from '../../components/buttons/Trial-training-btn';
import FormAdopted from '../../components/Form-adopted';
import FormCheckBox from "../../components/Form-check-box";
import GradientText from '../../components/Gradient-text';
import Input from '../../components/Input';
import MuscularPointer from '../../components/Muscular-pointer';
import Arrow  from '../../public/icon-svg/Drop-down-gradient-icon';
import style from '../../styles/modules/program.module.scss';
import { postProgramForms } from "../../utils/api";

const Program = () => {

  let [activSex, serActiveSex] = useState(false);
  let [goalStatus, setGoalStatus] = useState(false);
  let [goal_error, setGoal_error] = useState('');
  let [goal_active, setgoal_active] = useState('');
  let [showModal, setShowModal] = useState(false);
  let form = useRef();
  let goals = useRef();
  let limitationInput = useRef();
  let goalsWrap = useRef();
  let [checkBoxStatus, setCheckBoxStatus] = useState(false);
  let [checkBoxStyle, setChekcBoxStyle] = useState("");

  
  function setCheckBox() {
    if (!checkBoxStatus) {
      setChekcBoxStyle("box_checked");
    } else {
      setChekcBoxStyle("");
    }

    setCheckBoxStatus((checkBoxStatus = !checkBoxStatus));
  }

  
  // сюди записуються усі данні
  let [inputData, setInputData] = useState(
    [
      {id: 11, info: '', inputStatus:'inpuNoActive', placeholder: '*Ім’я та прізвище', inputName: '*Ім’я та прізвище'},
      {id: 21, info: '', inputStatus:'inpuNoActive', placeholder: '*Email', inputName: '*Email'},
      {id: 31, info: '', inputStatus:'inpuNoActive', placeholder: '*Телефон', inputName: '*Телефон'},
      {id: 41, info: '', inputStatus:'inpuNoActive', placeholder: '*Вік (Років)', inputName: '*Вік (Років)'},
      {id: 51, info: '', inputStatus:'inpuNoActive', placeholder: '*Зріст (СМ)', inputName: '*Зріст (СМ)'},
      {id: 61, info: '', inputStatus:'inpuNoActive', placeholder: '*Вага дана (КГ)', inputName: '*Вага дана (КГ)'},
      {id: 71, info: '', inputStatus:'inpuNoActive', placeholder: '*Вага бажана (КГ)', inputName: '*Вага бажана (КГ)'},
      {id: 81, info: '', inputStatus:'inpuNoActive', placeholder: '*Стаж тренувань', inputName: '*Стаж тренувань'},
      {id: 12, info: '', inputStatus:'inpuNoActive', placeholder: 'МХ кількість', inputName: 'МХ кількість'},
      {id: 13, info: '', inputStatus:'inpuNoActive', placeholder: 'МХ кількість', inputName: 'МХ кількість'},
      {id: 14, info: '', inputStatus:'inpuNoActive', placeholder: 'КГ', inputName: 'КГ'},
      {id: 15, info: '', inputStatus:'inpuNoActive', placeholder: 'МХ кількість', inputName: 'МХ кількість'},
      {id: 16, info: '', inputStatus:'inpuNoActive', placeholder: 'КГ', inputName: 'КГ'},
      {id: 17, info: '', inputStatus:'inpuNoActive', placeholder: 'КГ', inputName: 'КГ'},
      {id: 19, info: '', inputStatus:'inpuNoActive', placeholder: 'Обмеження (якщо є)', inputName: 'Обмеження (якщо є)'},

      {id: 123, dataForm:[
        {name: 'Шия', number: 0},
        {name: 'Грудні м’язи', number: 0},
        {name: 'Дельтовидні м’язи', number: 0},
        {name: 'Верх спини (широкі)', number: 0},
        {name: 'Низ спини (поперек)', number: 0},
        {name: 'Плече (біцепс, тріцепс)', number: 0},
        {name: 'Передплічя', number: 0},
        {name: 'Косі (боки)', number: 0},
        {name: 'Прямі (живіт)', number: 0},
        {name: 'Стегно', number: 0},
        {name: 'Гомілка', number: 0},
        {heart: 'не зміцнювати'},
        {sex: 'Жінка'},
        {goal: '*Мета тренувань'}
      ]}
    ]
  );
    
  let goalData = [
    {id: 1, name: 'Збільшення м\'язової маси тіла'},
    {id: 2, name: 'Зменшення ваги тіла ( схуднення)'},
    {id: 3, name: 'Шліфовка (жорсткого тонусу) м\'язової маси'},
    {id: 4, name: 'Функціональна програма'}
  ]

  let [goal, setGoal] = useState('*Мета тренувань');

  let muscularPoint = [
    {name: 'Шия', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Грудні м’язи', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Дельтовидні м’язи', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Верх спини (широкі)', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Низ спини (поперек)', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Плече (біцепс, тріцепс)', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Передплічя', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Косі (боки)', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Прямі (живіт)', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Стегно', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
    {name: 'Гомілка', pointNumber:[{point: 1}, {point: 2},{point: 3}]},
  ]


  function userChose(index, point) {
    let newData = [ ... inputData]
    newData[newData.length - 1].dataForm[index].number = point;
    setInputData(newData)
  }


  function changeSex() {
    let newObj = [...inputData]

    if(newObj[newObj.length - 1].dataForm[12].sex === 'Жінка') {
      newObj[newObj.length - 1].dataForm[12].sex = 'Чоловік'
    } else {
      newObj[newObj.length - 1].dataForm[12].sex = 'Жінка'
    }

    setInputData(newObj)
    serActiveSex(activSex = !activSex);
  }

  function onChangeValue(params, index) {
    let newData = [...inputData]

    newData[index]['info'] = params

    setInputData(newData)
  }

  function inputFocus(index) {
    let newData = [...inputData]
    
    newData[index]['placeholder']  = ''
    newData[index]['inputStatus']  = 'inputActive'

    setInputData(newData)
  }

  function inputBlur(index) {
    let newData = [...inputData]
 
    if(newData[index]['info'] === '') {
      newData[index]['placeholder']  = newData[index]['inputName']
      newData[index]['inputStatus']  = 'inpuNoActive'
    }

    setInputData(newData);
  }

  function checkHeart() {
    let newData = [...inputData]

    if(newData[newData.length - 1].dataForm[11].heart === 'не зміцнювати') {
      newData[newData.length - 1].dataForm[11].heart = 'зміцнювати'
    } else {
      newData[newData.length - 1].dataForm[11].heart = 'не зміцнювати'
    }
    
    setInputData(newData)
  }

  let [sliderCount, setSliderCount] = useState(0)

  function slider(param) {
    
    let count = sliderCount

    if(param &&  count < 10) {
      count++
    }

    if(!param &&  count > 0) {
      count--
    }

    setSliderCount(count)
  }

  function checkInput() {
    let newData = [...inputData]
    
    newData.forEach((element, index) => {
      if(index < 8) {
        if(element.info.length === 0) {
          element['inputStatus'] = 'inputError'
          form.current.scrollIntoView({behavior: "smooth", start: "end", inline: "nearest"})
        }
      }
    });

    if(goal === '*Мета тренувань') {
      setGoal_error('goal_error')
      form.current.scrollIntoView({behavior: "smooth", start: "end", inline: "nearest"})
    } else {
      setGoal_error('goal_active')
    }

    if (checkBoxStatus === false) {
      setChekcBoxStyle("box_checked_error");
    }

    if (
      inputData[0].info.length > 1 &&
      inputData[1].info.length > 1 &&
      inputData[2].info.length > 1 &&
      inputData[3].info.length > 1 &&
      inputData[4].info.length > 1 &&
      inputData[5].info.length > 1 &&
      inputData[6].info.length > 1 &&
      inputData[7].info.length > 1 &&
      inputData[inputData.length - 1].dataForm[13].goal !== '*Мета тренувань' &&
      checkBoxStatus === true
      ) {
        console.log('work');
        const objToPost = {
            name: inputData[0].info, // Ім'я
            email: inputData[1].info, //Пошта
            phone: inputData[2].info, // Телефон
            age: inputData[3].info, // Вік
            height: inputData[4].info, // Зріст
            weight: inputData[5].info, // Вага
            newWeight: inputData[6].info, // Бажана вага
            experience: inputData[7].info, // Стаж тренувань

            benchPress: inputData[8].info, // Жим лежачи 
            bars: inputData[9].info, // Віджимання на брусах
            pullBlock: inputData[10].info, // Тяга В.блока до грудей
            pullUp: inputData[11].info,  // Підтягування на перекладині
            squats: inputData[12].info,  // Присідання штанга на спині
            deadlift: inputData[13].info,  // Станова тяга
            restrictions: inputData[14].info,  // Фізичні обмеження
            neck: inputData[15].dataForm[0].number.toString(),  // Шия
            chest: inputData[15].dataForm[1].number.toString(),  // Грудні м’язи
            shoulder: inputData[15].dataForm[2].number.toString(),  // Дельтовидні м’язи
            upperBack: inputData[15].dataForm[3].number.toString(),  // Верх спини (широкі)
            bottomBack: inputData[15].dataForm[4].number.toString(),  // Низ спини (поперек)
            before: inputData[15].dataForm[5].number.toString(),  // Плече (біцепс, тріцепс)
            forearm: inputData[15].dataForm[6].number.toString(),  // Передплічя
            SlopingSides: inputData[15].dataForm[7].number.toString(),  // Косі    (боки)
            straightAbdomen: inputData[15].dataForm[8].number.toString(),  // Прямі живіт
            thigh: inputData[15].dataForm[9].number.toString(),  // Стегно
            shin: inputData[15].dataForm[10].number.toString(),  // Гомылка
            heart: inputData[15].dataForm[11].heart,  // Зміцнення серцево-судинної, дихАЛЬНОЇ систЕМИ
            sex: inputData[15].dataForm[12].sex,  // Стать
            goal: inputData[15].dataForm[13].goal,  // Ціль
        }

        postProgramForms(objToPost);
        
  
        setShowModal(showModal = !showModal)
      }
  

    setInputData(newData)
  };

  function showGoals(param) {
    if(!goalStatus) {
      goalsWrap.current.style.height = `${74 + goals.current.clientHeight}px`;

      if(param === '*Мета тренувань') {
        setGoal_error('');
      } else {
        setGoal_error('goal_active');
      }

      setGoalStatus(true);
    }

    if(goalStatus) {
      goalsWrap.current.style.height = `68px`

      setGoalStatus(false)
    }

  }

  function hideGoals(name) {
    setGoalStatus(false)

    let newData = [...inputData]

    newData[newData.length - 1].dataForm[13].goal = name

    if(goalStatus) {
      goalsWrap.current.style.height = `68px`
      setGoal_error('goal_active');
      setGoalStatus(false)
    }
  
    setGoal(name)
    setInputData(newData)
  }


  function closeModal() {
    setShowModal(showModal = !showModal)
  }

  return (
    <div className={style.program}>
      {showModal ? 
        <FormAdopted 
          adopted={()=>{closeModal()}}
          closeWindow={()=>{closeModal()}}
        /> : null
      }
      <Bread className={style.crumbs}>
        <Link href="/">Головна</Link>
          /
        <Link href="/training">Розробка програми тренування</Link>
          /
        <Link href="/">Анкета</Link>
      </Bread>
      <Link href="/training"><a className={style.mobile_crumbs}> <img src="/program/arrow.svg" alt="img" />Розробка програми тренування</a></Link>
      <h2 className={style.title}>
        <GradientText>АНКЕТА </GradientText>
         ІНДИВІДУАЛЬНОЇ ПРОГРАМИ ТРЕНУВАНЬ
      </h2>
      <span ref={form} className={style.total_info}>Загальна Інформація</span>
      <div className={style.sex}>
        <span className={style.sex_title}>Оберіть стать</span>
        <div className={style.icon_wrap}>
          <div
            className={`${style.sex_icon} ${style.sex_woman} ${!activSex ? style.sex_icon_active : ''}`}
            onClick={()=>{changeSex();}}
          >
            <div></div>
            <span>Жінка</span>
          </div>
          <div
            className={`${style.sex_icon} ${style.sex_man} ${activSex ? style.sex_icon_active : ''}`}
            onClick={()=>{changeSex();}}
          >
            <div></div>
            <span>Чоловік</span>
          </div>
        </div>

      </div>
      <form>

        <div className={style.input_wrap}>
          {inputData.map(({placeholder, inputName, inputStatus, id}, index)=>{
            return (
              <Fragment  key={id}>
                {index < 3 ? 
                  <Input
                    inputFocus={()=>{inputFocus(index, false)}}
                    inputBlur={()=>{inputBlur(index, false)}}
                    placeholder={placeholder}
                    inputName={inputName}
                    type='text'
                    onChangeValue={(params)=>{onChangeValue(params, index)}}
                    inputStatus={inputStatus}
                 /> : null
                }
              </Fragment>
            )
          })}
        </div>

        <div className={style.input_wrap2}>
          {inputData.map(({placeholder, inputName, inputStatus, id}, index)=>{
              return (
                <Fragment  key={id}>
                  {index >= 3 && index < 8 ? 
                      <Input
                      inputFocus={()=>{inputFocus(index)}}
                      inputBlur={()=>{inputBlur(index)}}
                      placeholder={placeholder}
                      inputName={inputName}
                      type='text'
                      onChangeValue={(params)=>{onChangeValue(params, index)}}
                      inputStatus={inputStatus}
                    /> : null
                  }
                </Fragment>
              )
            })}
        </div>

        <div className={`${style.goal_wrap_bcg} ${style[goal_error]} ${goalStatus ? style.arrow__rotate : ''}`}>
          <div ref={goalsWrap} className={`${style.goal}`}>
            <div onClick={()=>{showGoals(goal);}} className={style.goal_title}>
              <GradientText className={`${style.goal_title_text} ${style.goal_status}`}>{goal}</GradientText>
              <Arrow />
              {/* <div className={goalStatus ? style.arrow : ''}></div> */}
            </div>
            <div ref={goals} className={style.goal_wrap}>
              {goalData.map(({id, name})=>{
                return (
                  <span className={style.goal_item} onClick={()=>{hideGoals(name);}} key={id}>{name}</span>
                )
              })}
            </div>
          </div>
        </div>

        <span className={style.main_input}>*Обов’язкове поле</span>

        <div className={style.accent}>
          <div className={style.left_accent}>
            <div className={style.accent_title_wrap}>
              <span className={style.accent_title}>Акценти</span>
              <span className={style.under_title}>Кожен м’яз позначено відповідним кольором та відповідає назвам у розстрановці пріоритетів.</span>
            </div>
            <div className={`${style.priority} ${style.mobile_priority}`}>
              <span className={style.priority_title}>Позначки пріоритету</span>
              <div className={style.point_wrap}>
                <div className={style.accent_point}>
                  <div><span>1</span></div>
                  <span>В першу чергу</span>
                </div>
                <div className={style.accent_point}>
                  <div><span>2</span></div>
                  <span>В другу чергу</span>
                </div>
                <div className={style.accent_point}>
                  <div><span>3</span></div>
                  <span>В останню чергу</span>
                </div>
              </div>
            </div>
            {!activSex ? 
            <img className={style.sex_img} src="/program/Muscular Anatomy_Male 2.svg" alt="img" />
              :
            <img className={style.sex_img} src="/program/Muscular Anatomy_Male 1.svg" alt="img" />
            }
          </div>

          <div className={style.anatomy}>
            <div className={style.priority}>
              <span className={style.priority_title}>Позначки пріоритету</span>
              <div className={style.point_wrap}>
                <div className={style.accent_point}>
                  <div><span>1</span></div>
                  <span>В першу чергу</span>
                </div>
                <div className={style.accent_point}>
                  <div><span>2</span></div>
                  <span>В другу чергу</span>
                </div>
                <div className={style.accent_point}>
                  <div><span>3</span></div>
                  <span>В останню чергу</span>
                </div>
              </div>
            </div>

            <div className={style.mobile_pointer}>
              <MuscularPointer
                classNameWrap={style.slider}
                index={sliderCount}
                pointNumber={muscularPoint[sliderCount].pointNumber}
                name={inputData[inputData.length - 1].dataForm[sliderCount].name}
                className={`${style["point_name" + sliderCount]}`}
                userChose={(index, point)=>{userChose(index, point)}}
                number={inputData[inputData.length - 1].dataForm[sliderCount].number}
              />
              <div className={style.slider_btn_wrap}>
                <img
                  onClick={()=>{slider(false)}}
                   src="/program/left_arrow.svg" alt="img" />
                  <span>Перемикайте “{'<'}” “{'>'}” для вибору акцентів</span>
                <img
                  onClick={()=>{slider(true)}}
                   src="/program/right_arrow.svg" alt="img" />
              </div>
            </div>

            <div className={style.points_wrap}>
              {muscularPoint.map(({name, pointNumber}, index)=>{
                return (
                  <Fragment key={name}>
                    {index < 7 ?
                      <MuscularPointer
                        index={index}
                        pointNumber={pointNumber}
                        name={name}
                        className={`${style["point_name" + index]}`}
                        userChose={(index, point)=>{userChose(index, point)}}
                        number={inputData[inputData.length - 1].dataForm[index].number}
                      />
                    : null}
                  </Fragment>
                )
              })}

              <span className={style.press}>мязи прессу</span>
              
              {muscularPoint.map(({name, pointNumber}, index)=>{
                return (
                  <Fragment key={name}>
                    {index > 6 && index < 9 ?
                      <MuscularPointer
                        index={index}
                        pointNumber={pointNumber}
                        name={name}
                        className={`${style["point_name" + index]}`}
                        userChose={(index, point)=>{userChose(index, point)}}
                        number={inputData[inputData.length - 1].dataForm[index].number}
                      />
                    : null}
                  </Fragment>
                )
              })}

              <span className={style.press}>стегно</span>

              {muscularPoint.map(({name, pointNumber}, index)=>{
                return (
                  <Fragment key={name}>
                    {index > 8 ?
                      <MuscularPointer
                        index={index}
                        pointNumber={pointNumber}
                        name={name}
                        className={`${style["point_name" + index]}`}
                        userChose={(index, point)=>{userChose(index, point)}}
                        number={inputData[inputData.length - 1].dataForm[index].number}
                      />
                    : null}
                  </Fragment>
                )
              })}

            </div>
            <div onClick={()=>{checkHeart()}}
              className={`${style.heart} ${inputData[inputData.length - 1].dataForm[11].heart === 'зміцнювати' ? style.heart_active : ''}`}>
              <div></div>
              <span>
                Зміцнення серцево-судинної, дихАЛЬНОЇ систЕМИ
            </span>
            </div>
          </div>
        </div>

        {activSex ? 
          <div className={style.power}>
            <span className={style.power_title}>Функціонально-силові показники</span>
            <div className={style.power_input_wrap}>
              <div className={style.input_block}>
                <div className={style.input_text_wrap}>
                  <span>Жим лежачи -  на 5-6 повторень</span>
                  <span>Віджимання на брусах-свт (Своя вага тіла)</span>
                  <span>Тяга В.блока до грудей - на 5-6 повторень</span>
                  <span>Підтягування на перекладині - свт (Своя вага тіла)</span>
                  <span>Присідання штанга на спині - на 5-6 повторень</span>
                  <span>Станова тяга - вага на 5-6 повторень</span>
                </div>
                <div>
                  {inputData.map(({placeholder, inputName, inputStatus, id}, index)=>{
                    return (
                      <Fragment key={id}>
                        { index >= 8 && index < 14 ? 
                             <Input 
                             inputFocus={()=>{inputFocus(index)}}
                             inputBlur={()=>{inputBlur(index)}}
                             onChangeValue={(params)=>{onChangeValue(params, index)}}
                             placeholder={placeholder}
                             inputName={inputName}
                             inputStatus={inputStatus}
                             className={style.power_input}
                           /> : null
                        }
                      </Fragment>
                    )
                  })}
                </div>
              </div>
              <div className={style.power_img}></div>
              {/* <img src="/program/Depositphotos_153154962_xl-2015 1.png" alt="img" /> */}
            </div>
          </div>
        : null}

        <div className={style.message_wrap}>
          <span className={style.limitation_title}>
          Обмеження (опорно-рухового апарату, серцево-судинної системи, дихальної системи)
          </span>
          <FormCheckBox
            ckecked={() => {
              setCheckBox();
            }}
            className={checkBoxStyle}
          />

          <Input
            className={style.limitation}
            textarea
            inputFocus={()=>{inputFocus(14)}}
            inputBlur={()=>{inputBlur(14)}}
            onChangeValue={(params)=>{onChangeValue(params, 14)}}
            placeholder={inputData[14].placeholder}
            inputName={inputData[14].inputName}
            inputStatus={inputData[14].inputStatus}
          />
        </div>
        <SendBtn
          consultation type="button"
          funcAction={()=>{checkInput()}}
          className={style.send_btn}
        >Надіслати анкету</SendBtn>
      </form>
    </div>
  );
};

export default Program;
