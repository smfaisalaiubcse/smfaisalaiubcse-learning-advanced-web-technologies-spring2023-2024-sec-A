// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { isArray } from 'class-validator';
// import { verify } from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import { UsersService } from 'src/users/users.service';
// import { AllUser } from 'src/all-user/entities/all-user.entity';

// declare global {
//   // eslint-disable-next-line @typescript-eslint/no-namespace
//   namespace Express {
//     interface Request {
//       currentUser?: AllUser;
//     }
//   }
// }

// @Injectable()
// export class CurrentUserMiddleware implements NestMiddleware {
//   constructor(private readonly usersService: UsersService) {}
//   async use(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers.authorization || req.headers.Authorization;
//     if (
//       !authHeader ||
//       isArray(authHeader) ||
//       !authHeader.startsWith('Bearer')
//     ) {
//       req.currentUser = null;
//       next();
//       return;
//     } else {
//       try {
//         const token = authHeader.split(' ')[1];
//         const { id } = <JwtPayload>(
//           verify(token, process.env.ACCESS_TOKEN_SECRET_KEY)
//         );
//         const currentUser = await this.usersService.findOne(+id);
//         console.log(currentUser);
//         req.currentUser = currentUser;
//         next();
//       } catch (err) {
//         req.currentUser = null;
//         next();
//       }
//     }
//   }
// }

// interface JwtPayload {
//   id: string;
// }
