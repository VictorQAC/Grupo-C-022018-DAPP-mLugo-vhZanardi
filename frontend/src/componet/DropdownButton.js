import React from 'react';
import { DropdownButton,MenuItem} from 'react-bootstrap';
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
                <DropdownButton title={<Trans i18nKey="button.language">Language</Trans>} bsStyle={'dropdown-basic-primary'} onClick={this.showDropdownMenu}>
                </DropdownButton>
                { this.state.displayMenu ? (
                        <MenuItem>
                            <button className="button" style={{background:"grey"}} onClick={() => i18n.changeLanguage('es')} >Español
                            </button>
                            <button className="button" style={{background:"grey"}} onClick={() => i18n.changeLanguage('en')}>English
                            </button>
                        </MenuItem>

                    ):
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default translate('common')(Dropdown);
// export default Dropdown;