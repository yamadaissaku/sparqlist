import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @service session;

  @tracked errorMessage = null;

  @action
  async authenticate() {
    try {
      // NOTE identification is not used
      await this.session.authenticate('authenticator:oauth2', '', this.password);
    } catch (res) {
      this.errorMessage = res.responseJSON.error;
    }
  }
}
