import React from 'react';
import styles from './styles';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  href?: string;
  ref: React.LegacyRef<HTMLButtonElement>;
}


export default React.forwardRef(
  (props: ButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    return (
      <button {...props} ref={ref}>
        <style jsx>{styles}</style>
        {props.children}
      </button>
    )
  }
);
