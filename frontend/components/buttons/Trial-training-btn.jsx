import style from "../../styles/modules/trial-training.btn.module.scss";
import Link from "next/link";

const TrialTrainingBtn = ({ className, children, consultation, funcAction, link }) => {
  return (
    <div className={`${style.trial_btn_bcg} ${className}`}>
      {consultation ? (
        <div onClick={()=>{funcAction();}}>
          <span className={style.consultation}>{children}</span>
        </div>
      ) : (
        <div>
          <Link href={`${link}`}>
            <a>{children}</a>
            </Link>
        </div>
      )}
    </div>
  );
};

export default TrialTrainingBtn;
