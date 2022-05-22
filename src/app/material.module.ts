import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    exports:[MatToolbarModule,MatButtonModule,MatCardModule,MatDialogModule,
        MatFormFieldModule,MatSelectModule,MatInputModule]

})
export class MaterialModule {}
