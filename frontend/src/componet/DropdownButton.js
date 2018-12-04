import React from 'react';
import { Button,MenuItem} from 'react-bootstrap';
import { translate, Trans } from 'react-i18next';
import '../Button.css';

class Dropdown extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
           document.removeEventListener('click', this.hideDropdownMenu);
        });

    }


    render() {
        const {i18n} = this.props;
        return (
            <div  className="dropdown" >

                            <Button bsStyle="link" onClick={() => i18n.changeLanguage('es')} >Esp
                            </Button>
                            <Button bsStyle="link" onClick={() => i18n.changeLanguage('en')}>Eng
                            </Button>
            </div>

        );
    }
}

export default translate('common')(Dropdown);
// export default Dropdown;