import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'example',
  template: `
    <form [formGroup]="form">

      <div class="field half">
        <label class="fe_select" for="type">
          <span class="field-label">Tipo</span>
          <div class="fe_select-container">
            <select id="type" name="type" formControlName="type">
              <option *ngFor="let t of types" [value]="t">{{t}}</option>
            </select>
            <svg height="12" width="12" fill="#cccccc" viewBox="520 2957 10 5"><path d="M520 2957l5 5 5-5z"/></svg>
          </div>
        </label>
      </div>

      <div class="field half">
        <label class="fe_text" for="title">
          <span class="field-label">Título</span>
          <input id="title" name="title" type="text" formControlName="title">
        </label>
      </div>

      <div class="field">
        <label class="fe_text" for="content">
          <span class="field-label">Conteúdo</span>
          <input id="content" name="content" type="text" formControlName="content">
        </label>
      </div>

      <div class="field half">
        <label class="fe_text" for="timeOut">
          <span class="field-label">Duração</span>
          <input id="timeOut" name="timeOut" type="number" formControlName="timeOut">
        </label>
      </div>

      <div class="field half">
        <label class="fe_select" for="animate">
          <span class="field-label">Animação</span>
          <div class="fe_select-container">
            <select id="animate" name="animate" formControlName="animate">
              <option *ngFor="let t of animationTypes" [value]="t">{{t}}</option>
            </select>
            <svg height="12" width="12" fill="#cccccc" viewBox="520 2957 10 5"><path d="M520 2957l5 5 5-5z"/></svg>
          </div>
        </label>
      </div>      

      <p class="field-label">Mostrar barra de progresso?</p>
      <div class="field">
        <label class="fe_radio" for="showProgressBar-yes">
          <input id="showProgressBar-yes" name="showProgressBar" type="radio" [value]="true" formControlName="showProgressBar"/>
          <div class="control"></div>
          <span>Sim</span>
        </label>
        <label class="fe_radio" for="showProgressBar-no">
          <input id="showProgressBar-no" name="showProgressBar" type="radio" [value]="false" formControlName="showProgressBar"/>
          <div class="control"></div>
          <span>Não</span>
        </label>
      </div>

      <p class="field-label">Pausar ao passar o mouse?</p>
      <div class="field">
        <label class="fe_radio" for="pauseOnHover-yes">
          <input id="pauseOnHover-yes" name="pauseOnHover" type="radio" [value]="true" formControlName="pauseOnHover"/>
          <div class="control"></div>
          <span>Sim</span>
        </label>
        <label class="fe_radio" for="pauseOnHover-no">
          <input id="pauseOnHover-no" name="pauseOnHover" type="radio" [value]="false" formControlName="pauseOnHover"/>
          <div class="control"></div>
          <span>Não</span>
        </label>
      </div>

      <p class="field-label">Clique para fechar?</p>
      <div class="field">
        <label class="fe_radio" for="clickToClose-yes">
          <input id="clickToClose-yes" name="clickToClose" type="radio" [value]="true" formControlName="clickToClose"/>
          <div class="control"></div>
          <span>Sim</span>
        </label>
        <label class="fe_radio" for="clickToClose-no">
          <input id="clickToClose-no" name="clickToClose" type="radio" [value]="false" formControlName="clickToClose"/>
         <div class="control"></div>
          <span>Não</span>
        </label>
      </div>

      <div class="field cta-field">
        <button type="submit" (click)="create()">Criar</button>
      </div>
    </form>
  `,
  styleUrls: ['../styles.css']
})
export class ExampleComponent implements OnInit {
  constructor(
    private _notifications: NotificationsService,
    private _fb: FormBuilder
  ) { }

  form: FormGroup;

  
  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  ngOnInit() {
		this.form = this._fb.group({
			type: 'success',
			title: 'Este é apenas um título',
			content: 'Isso é apenas algum conteúdo',
			timeOut: 5000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: true,
			animate: 'Direita'
		});
	}

	create() {

		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;

		this._notifications.create(title, content, type, temp)
	}
}