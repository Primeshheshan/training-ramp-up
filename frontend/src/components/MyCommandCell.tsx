const MyCommandCell = (props: any) => {
  const { dataItem } = props;
  const inEdit = dataItem[props.editField];
  const isNewItem = dataItem.id === undefined;

  return inEdit ? (
    <td className='k-command-cell'>
      <button
        className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-save-command'
        onClick={() =>
          isNewItem ? props.add(dataItem) : props.update(dataItem)
        }
      >
        {isNewItem ? 'Add' : 'Update'}
      </button>
      <button
        className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-cancel-command'
        onClick={() =>
          isNewItem ? props.discard(dataItem) : props.cancel(dataItem)
        }
      >
        {isNewItem ? 'Discard' : 'Cancels'}
      </button>
    </td>
  ) : (
    <td className='k-command-cell'>
      <button
        className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-grid-edit-command'
        onClick={() => props.edit(dataItem)}
      >
        Edit
      </button>
      <button
        className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-remove-command'
        onClick={() => props.remove(dataItem)}
      >
        Remove
      </button>
    </td>
  );
};
export default MyCommandCell;
