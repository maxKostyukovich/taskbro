import {Controller, Get, Req, UseGuards} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {AppService} from "../../app.service";

@Controller('google')
export class GoogleAuthController {

    constructor(
        private appService: AppService
    ) {}

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req){}

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        if(!req.user) {
            return 'No User From google'
        }

        return {
            message: 'User information from Google',
            user: req.user
        }
    }
}