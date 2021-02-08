import {Controller, Get, Req, UseGuards} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";

@Controller('google')
export class GoogleAuthController {
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