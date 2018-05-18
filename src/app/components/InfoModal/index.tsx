import * as React from 'react';
import Modal from 'react-modal';
import * as style from './style.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '80vh'
  }
};

interface InfoModalState {
  modalIsOpen: boolean;
}

interface InfoModalProps {
  win: boolean;
  info: boolean;
  playAgain;
  hideInfo;
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
export class InfoModal extends React.Component<InfoModalProps, InfoModalState> {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(props, oldProps) {
    if (props.info) {
      this.setState({
        modalIsOpen: true
      })
    }
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.props.hideInfo();
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={style.modalContainer} >
          <div className={style.modalHeader} > { this.props.win ? 'You win' : 'You Loose' }</div>
          {/* <button onClick={this.closeModal}>close</button> */}
          <div className={style.modalBody}>
            {
              this.props.win ? (<img className={style.bodyImg}  src="https://pmcdeadline2.files.wordpress.com/2017/10/gotcha-logo2-clear.png?w=446&h=310&crop=1" />)
                : (<img className={style.bodyImg}  src="http://lizasimpson.com/uploads/_pages/612/8.jpg" />)
            }
          </div>

         <div className={style.modalFooter} onClick={()=>{this.props.playAgain(); this.closeModal()}}  > Try Again </div>
        </div>
      </Modal>
    );
  }
}
