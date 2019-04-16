import { Signup as Presentation } from '../../../models-folder';
import { expect } from 'chai';
import 'mocha';
import { Signup } from '../../../core/services/Signup';
import { User as Model } from '../../../core/models/user';
import { IRepository } from '../../../core/dal';
import { RepoStub } from '../dal/RepoStub';

describe('Sign up service', () => {
  let sut: Signup;
  let repo: IRepository<Model>;
  let presentation: Presentation;

  const email = 'anemail@domain.com';
  const password = 'password';
  const passwordConfirm = 'password';
  const username = 'anuser';

  beforeEach(() => {
    repo = new RepoStub();
    sut = new Signup(repo);

    presentation = new Presentation(username, password, passwordConfirm, email);
  });

  it('should be able to create a user from presentation', () => {
    // Act
    const result = sut.userFromPresentation(presentation);

    // Assert
    expect(result.email).to.equal(email);
    expect(result.password).to.equal(password);
    expect(result.username).to.equal(username);
  });

  it('should create a new user and hash password when called', async () => {
    // Act
    const user = await sut.createNewUser(presentation);

    // Assert
    expect(repo.find(1)).to.not.be.undefined; //tslint:disable-line
    expect(user.password).to.not.equal(password);
  });
});
