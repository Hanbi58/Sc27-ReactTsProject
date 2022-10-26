import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onDelete: (id: string) => void;
}> = (props) => {
  const onDeleteHandler = (event: React.MouseEvent) => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes.item} onClick={onDeleteHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
