# Roll Hover Button

![](docs/roll-hover-button.gif)

## Installation

```bash
yarn add @antipodes-medical/roll-hover-button
```

Dans le Javascript :

```javascript
import '@antipodes-medical/roll-hover-button';
```

Et dans votre SCSS :

```scss
@import '~@antipodes-medical/roll-hover-button/src/roll-hover-button';
```

## Utilisation

Il suffit d'insérer l'élément `<roll-hover-button>` à l'endroit où vous souhaitez que celui-ci s'affiche :

```html

<roll-hover-button href="#">
    <span slot="title">Mon bouton</span>
</roll-hover-button>
```

L'élément `<span slot="title"></span>` vous permet de gérer le texte de votre bouton.

### Fonctionnement

Le `roll-hover-button` fonctionne comme un lien classique, vous pouvez lui définir un `href` et un `target="_blank"` par exemple.

Lorsque vous mettez `target="_blank"`, le lien se générera automatiquement comme suit : `target="_blank" rel="noopener noreferrer"`

### Picto

Vous pouvez ajouter un pictogramme (ou autre) dans ce bouton, par exemple :

```html

<roll-hover-button href="#">
    <span slot="picto">
        <svg
                aria-hidden="true"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
        >
            <path
                    d="M19.7579 15.4866C19.2461 14.9537 18.6287 14.6688 17.9745 14.6688C17.3255 14.6688 16.7028 14.9484 16.1699 15.4813L14.5026 17.1434C14.3654 17.0695 14.2282 17.001 14.0963 16.9324C13.9063 16.8374 13.7269 16.7477 13.5739 16.6527C12.0121 15.6607 10.5927 14.368 9.23142 12.6954C8.57187 11.8617 8.12865 11.16 7.80679 10.4476C8.23946 10.0519 8.64047 9.64035 9.03092 9.24461C9.17866 9.09687 9.3264 8.94386 9.47414 8.79612C10.5822 7.68807 10.5822 6.25288 9.47414 5.14483L8.03368 3.70437C7.87011 3.5408 7.70126 3.37196 7.54297 3.20311C7.22638 2.87597 6.89397 2.53828 6.551 2.2217C6.03919 1.71516 5.42713 1.44606 4.7834 1.44606C4.13968 1.44606 3.51706 1.71516 2.98942 2.2217C2.98414 2.22697 2.98414 2.22697 2.97887 2.23225L1.18488 4.04206C0.509502 4.71745 0.124323 5.54057 0.0399002 6.4956C-0.0867339 8.03631 0.367038 9.4715 0.715282 10.4107C1.57006 12.7165 2.84696 14.8534 4.75174 17.1434C7.06282 19.903 9.84349 22.0821 13.0199 23.6176C14.2335 24.1927 15.8533 24.8734 17.6631 24.9895C17.774 24.9947 17.89 25 17.9956 25C19.2144 25 20.238 24.5621 21.0401 23.6915C21.0453 23.6809 21.0559 23.6756 21.0612 23.6651C21.3355 23.3327 21.6521 23.0319 21.9845 22.71C22.2114 22.4937 22.4436 22.2668 22.6705 22.0294C23.1928 21.4859 23.4672 20.8527 23.4672 20.2037C23.4672 19.5495 23.1876 18.9216 22.6546 18.3939L19.7579 15.4866ZM21.6468 21.0427C21.6416 21.0427 21.6416 21.048 21.6468 21.0427C21.4411 21.2643 21.23 21.4648 21.0031 21.6864C20.6602 22.0136 20.3119 22.3565 19.9848 22.7417C19.4519 23.3116 18.824 23.5807 18.0008 23.5807C17.9217 23.5807 17.8373 23.5807 17.7581 23.5754C16.191 23.4751 14.7347 22.8631 13.6425 22.3407C10.6561 20.895 8.03368 18.8424 5.85452 16.2411C4.05526 14.0725 2.85223 12.0675 2.05549 9.91472C1.56479 8.60089 1.38539 7.57727 1.46453 6.61168C1.5173 5.99434 1.75474 5.48253 2.19268 5.04458L3.99194 3.24532C4.25048 3.00261 4.52486 2.8707 4.79396 2.8707C5.12637 2.8707 5.39547 3.0712 5.56431 3.24005C5.56959 3.24532 5.57486 3.2506 5.58014 3.25588C5.902 3.55663 6.20804 3.86794 6.5299 4.20036C6.69347 4.3692 6.86231 4.53805 7.03116 4.71217L8.47162 6.15263C9.03092 6.71193 9.03092 7.22902 8.47162 7.78832C8.3186 7.94134 8.17086 8.09435 8.01785 8.24209C7.57463 8.69587 7.15251 9.11798 6.69347 9.52954C6.68291 9.54009 6.67236 9.54537 6.66708 9.55592C6.21331 10.0097 6.29773 10.4529 6.39271 10.7537C6.39799 10.7695 6.40326 10.7853 6.40854 10.8012C6.78317 11.7087 7.31081 12.5635 8.11282 13.5818L8.1181 13.5871C9.57439 15.3811 11.1098 16.7793 12.8036 17.8505C13.0199 17.9876 13.2415 18.0984 13.4526 18.204C13.6425 18.299 13.8219 18.3887 13.9749 18.4836C13.996 18.4942 14.0171 18.51 14.0382 18.5206C14.2176 18.6103 14.3865 18.6525 14.5606 18.6525C14.9986 18.6525 15.2729 18.3781 15.3626 18.2884L17.1672 16.4839C17.3466 16.3045 17.6315 16.0881 17.9639 16.0881C18.291 16.0881 18.5601 16.2939 18.7237 16.4733C18.729 16.4786 18.729 16.4786 18.7343 16.4839L21.6416 19.3912C22.185 19.9294 22.185 20.4834 21.6468 21.0427Z"
                    fill="#4E406F"
            ></path>
            <path
                    d="M13.5106 5.94684C14.8931 6.17901 16.1489 6.83328 17.1514 7.8358C18.1539 8.83832 18.8029 10.0941 19.0403 11.4765C19.0984 11.8248 19.3991 12.0675 19.7421 12.0675C19.7843 12.0675 19.8212 12.0622 19.8635 12.0569C20.2539 11.9936 20.5125 11.6243 20.4491 11.2338C20.1642 9.56119 19.3727 8.03631 18.1644 6.82801C16.9561 5.61971 15.4313 4.82824 13.7586 4.54332C13.3682 4.48 13.0041 4.73854 12.9355 5.12372C12.8669 5.5089 13.1202 5.88353 13.5106 5.94684Z"
                    fill="#4E406F"
            ></path>
            <path
                    d="M24.971 11.028C24.5014 8.27374 23.2034 5.76744 21.2089 3.77296C19.2144 1.77847 16.7081 0.480469 13.9538 0.0108673C13.5687 -0.0577262 13.2046 0.206095 13.136 0.591274C13.0727 0.981729 13.3312 1.3458 13.7217 1.4144C16.1805 1.83123 18.423 2.99732 20.2064 4.77548C21.9898 6.55891 23.1506 8.80138 23.5675 11.2602C23.6255 11.6084 23.9263 11.8512 24.2692 11.8512C24.3115 11.8512 24.3484 11.8459 24.3906 11.8406C24.7758 11.7826 25.0396 11.4132 24.971 11.028Z"
                    fill="#4E406F"
            ></path>
        </svg>
    </span>
    <span slot="title">Mon bouton</span>
</roll-hover-button>
```

Il vous faudra le définir dans `<span slot="picto"></span>`

## Custom styling

```css
/* select your specific input or all */
roll-hover-button.some-class {
    color: red;
}

roll-hover-button.some-class svg {
    margin-right: 0.5rem;
}

roll-hover-button.some-class svg path {
    fill: blue;
}
```