import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../schemas/user.schema';

import { UsersController } from '../users.controller';
import { UsersRepository } from '../users.repository';
import { UsersService } from '../users.service';

import { userStub } from './stubs/user.stub';
import { UserModel } from './support/user.model';

// jest.mock('../users.service');
// constructor(private readonly usersRepository: UsersRepository) {}

// async getUserById(userId: string): Promise<User> {
//   return this.usersRepository.findOne({ userId });
// }

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      providers: [
        UsersService,
        UsersRepository,
        {
          provide: getModelToken(User.name),
          useClass: UserModel,
        },
      ],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersRepository = moduleRef.get<UsersRepository>(UsersRepository);

    jest.clearAllMocks();
  });
  describe('when getUserById is called', () => {
    let user: User;

    beforeEach(async () => {
      user = await usersService.getUserById(userStub().userId);
    });

    test('getUserById should return always an user', () => {
      expect(typeof usersService.getUserById(userStub().userId)).not.toEqual(
        null,
      );
    });
    test('then is should return a user', () => {
      expect(user).toEqual(userStub());
    });
  });
  describe('getUsers', () => {
    describe('when getUsers is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await usersService.getUsers();
      });

      test('getUsers should return always an user', () => {
        expect(typeof usersService.getUsers()).not.toEqual(null);
      });

      test('then it should return users', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });
  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user: User;
      beforeEach(async () => {
        const create = jest
          .spyOn(usersRepository, 'create')
          .mockImplementationOnce(() => userStub() as any);

        user = await usersService.createUser(userStub().email, userStub().age);
      });

      test('then it should return a user created', () => {
        expect(user).toEqual(userStub());
      });
    });
  });
});
