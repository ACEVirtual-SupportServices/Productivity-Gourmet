import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import styles from './Editor.module.scss';

const SlashCommandList = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => setSelectedIndex(0), [props.items]);

  const selectItem = (index) => {
    const item = props.items[index];
    if (item) props.command(item);
  };

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === 'ArrowUp') {
        setSelectedIndex(i => (i + props.items.length - 1) % props.items.length);
        return true;
      }
      if (event.key === 'ArrowDown') {
        setSelectedIndex(i => (i + 1) % props.items.length);
        return true;
      }
      if (event.key === 'Enter') {
        selectItem(selectedIndex);
        return true;
      }
      return false;
    },
  }));

  if (!props.items.length) {
    return <div className={styles.slashMenu}><span className={styles.slashEmpty}>No results</span></div>;
  }

  return (
    <div className={styles.slashMenu}>
      {props.items.map((item, index) => (
        <button
          key={item.title}
          className={`${styles.slashItem} ${index === selectedIndex ? styles.slashItemActive : ''}`}
          onClick={() => selectItem(index)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
});

SlashCommandList.displayName = 'SlashCommandList';
export default SlashCommandList;