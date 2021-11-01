import React, { Fragment, useState } from "react";
import style from "../styles/modules/Trial-training-modal.module.scss";
import Input from "./Input";
import ConfirmBtn from "./buttons/Trial-training-btn";
import { postTrialTrainingForm, postTutorialForm } from "../utils/api";
import FormCheckBox from "./Form-check-box";

const TrialTrainingModal = ({ closeWindow, consultation }) => {
  let [alartMessage, setAlartMessage] = useState(false);
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

  let [inputData, setInputData] = useState([
    {
      id: 11,
      info: "",
      inputStatus: "inpuNoActive",
      placeholder: "*Ім’я та прізвище",
      inputName: "*Ім’я та прізвище",
    },
    {
      id: 31,
      info: "",
      inputStatus: "inpuNoActive",
      placeholder: "*Телефон",
      inputName: "*Телефон",
    },
    {
      id: 21,
      info: "",
      inputStatus: "inpuNoActive",
      placeholder: "*Email",
      inputName: "*Email",
    },
    {
      id: 23,
      info: "",
      inputStatus: "inpuNoActive",
      placeholder: "Категорія консультації",
      inputName: "Категорія консультації",
    },
    {
      id: 24,
      info: "",
      inputStatus: "inpuNoActive",
      placeholder: "Твоє повідомлення",
      inputName: "Твоє повідомлення",
    },
  ]);

  function onChangeValue(params, index) {
    let newData = [...inputData];

    newData[index]["info"] = params;

    setInputData(newData);
  }

  function inputFocus(index) {
    let newData = [...inputData];

    newData[index]["placeholder"] = "";
    newData[index]["inputStatus"] = "inputActive";

    setInputData(newData);
  }

  function inputBlur(index) {
    let newData = [...inputData];

    if (newData[index]["info"] === "") {
      newData[index]["placeholder"] = newData[index]["inputName"];
      newData[index]["inputStatus"] = "inpuNoActive";
    }

    setInputData(newData);
  }

  function checkInput() {
    let newData = [...inputData];

    newData.forEach((element, index) => {
      if (index < 3) {
        if (element.info.length === 0) {
          element["inputStatus"] = "inputError";
        }
      }
    });

    if (checkBoxStatus === false) {
      setChekcBoxStyle("box_checked_error");
    }

    if (
      inputData[0].info.length > 1 &&
      inputData[1].info.length > 1 &&
      inputData[2].info.length > 1 &&
      checkBoxStatus === true
    ) {
      if (consultation) {
        sendMailTrialForm();
      } else {
        sendMailTutorial();
      }
      setAlartMessage((alartMessage = !alartMessage));
    }

    setInputData(newData);
  }

  function sendMailTutorial() {
    postTrialTrainingForm({
      email: inputData[2].info,
      fullName: inputData[0].info,
      phone: inputData[1].info,
    });
  }

  function sendMailTrialForm() {
    postTutorialForm({
      email: inputData[2].info,
      fullName: inputData[0].info,
      phone: inputData[1].info,
      description: inputData[4].info,
      categoryConsultation: inputData[3].info,
    });
  }

  return (
    <div className={style.trial_training}>
      <div className={style.message_wrap}>
        {consultation ? (
          ""
        ) : (
          <div className={style.apple}>
            <img src='/modal_window/Apple.svg' alt='img' />
          </div>
        )}
        <img
          onClick={() => {
            closeWindow();
          }}
          src='/modal_window/close.svg'
          alt='img'
        />

        {alartMessage ? (
          <div className={style.comfirm_alert}>
            <span>
              Ваш запит надіслано. Деталі замовлення вже у тебе на пошті. Ми
              зателефонуємо тобі найближчим часом.
            </span>
            <ConfirmBtn
              consultation
              className={style.confirm_btn}
              funcAction={() => {
                closeWindow();
              }}
            >
              Зрозуміло
            </ConfirmBtn>
          </div>
        ) : (
          <div>
            {consultation ? (
              <span className={style.moda_text}>
                Це форма для запису на консультацію. Заповни свої дані і ми тобі
                зателефонуємо.
              </span>
            ) : (
              <span className={style.moda_text}>
                Пробне тренування з повним інструктажем від тренера.
                <br />
                Вартість пробного тренування{" "}
                <span className={style.main_text}> 100 грн</span>
                <br />
                За наявності документа що засвідчує особу.
                <br />
                <span className={style.main_text}>Тривалість одна година</span>
              </span>
            )}

            <div className={style.input_wrap}>
              {inputData.map(
                ({ placeholder, inputName, inputStatus, id }, index) => {
                  return (
                    <Fragment>
                      {consultation ? (
                        <Input
                          textarea={
                            inputName === "Твоє повідомлення" ? true : false
                          }
                          key={id}
                          inputFocus={() => {
                            inputFocus(index);
                          }}
                          inputBlur={() => {
                            inputBlur(index);
                          }}
                          placeholder={placeholder}
                          inputName={inputName}
                          type='text'
                          onChangeValue={(params) => {
                            onChangeValue(params, index);
                          }}
                          inputStatus={inputStatus}
                          className={style.input_bcg}
                        />
                      ) : (
                        <Fragment>
                          {index < 3 ? (
                            <Input
                              textarea={
                                inputName === "Твоє повідомлення" ? true : false
                              }
                              key={id}
                              inputFocus={() => {
                                inputFocus(index);
                              }}
                              inputBlur={() => {
                                inputBlur(index);
                              }}
                              placeholder={placeholder}
                              inputName={inputName}
                              type='text'
                              onChangeValue={(params) => {
                                onChangeValue(params, index);
                              }}
                              inputStatus={inputStatus}
                              className={style.input_bcg}
                            />
                          ) : (
                            ""
                          )}
                        </Fragment>
                      )}
                    </Fragment>
                  );
                }
              )}
            </div>
            <FormCheckBox
              ckecked={() => {
                setCheckBox();
              }}
              className={checkBoxStyle}
            />
            <span className={style.main_input}>*Обов’язкове поле</span>
            <ConfirmBtn
              funcAction={() => {
                checkInput();
              }}
              className={style.send_btn}
              consultation
            >
              Записатись
            </ConfirmBtn>
          </div>
        )}

        {/*  */}
      </div>
    </div>
  );
};

export default TrialTrainingModal;
