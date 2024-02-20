import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'',
    component:HomeComponent,
  },
  {path:'home',
    component:HomeComponent,
  },
  {path:'header',
    component:HeaderComponent,
  },
  {path:'about',
    component:AboutComponent,
  },
  {path:'contact',
    component:ContactComponent,
  },
  {path:'portfolio',
    component:PortfolioComponent,
  },
  {path:'service',
    component:ServicesComponent,
  },
  {path:'footer',
    component:FooterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
