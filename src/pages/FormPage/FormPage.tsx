import React from 'react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import CardsList from '../../components/CardsList/CardsList';
import { CardDataType } from '../../types/types';

type FormPageProps = Record<string, never>;

type FormPageState = {
  cards: CardDataType[] | [];
};

class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = { cards: [] };
    this.setPageState = this.setPageState.bind(this);
  }

  setPageState(newState: FormPageState) {
    this.setState(newState);
  }

  render() {
    return (
      <>
        <h1>Form</h1>
        <AddCardForm cards={this.state.cards} setPageState={this.setPageState} />
        <CardsList cards={this.state.cards} />
      </>
    );
  }
}

export default FormPage;
