import "./index.css";

type DividerProps = {
  styles?: React.CSSProperties;
};

export const Divider = (props: DividerProps) => {
  return (
    <div className="iDivider" style={props.styles ? props.styles : {}}>
    </div>
  );
};
