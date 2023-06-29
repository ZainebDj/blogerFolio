import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
export const authGuard: CanActivateFn = (route, state) => {
  let http !: HttpClient
  const service = new AuthService(http); 
  const router = new Router();

  if (service.isLoggedIn()) {
    if (route.url.length > 0) {
      const menu = route.url[0].path;
      if (menu === 'user') {
        if (service.getRole() === 'admin') {
          return true;
        } else {
          router.navigate(['']);
          return false;
        }
      } else {
        return true;
      }
    } else {
      return true;
    }
  } else {
    router.navigate(['/']);
    return false;
  }
};
