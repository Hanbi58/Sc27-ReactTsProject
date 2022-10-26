import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onDelete: () => void;
}> = (props) => {
  // const onDeleteHandler = (event: React.MouseEvent) => {
  //   props.onDelete(props.id);
  // };

  return (
    <li className={classes.item} onClick={props.onDelete}>
      {props.text}
    </li>
  );
};

export default TodoItem;
