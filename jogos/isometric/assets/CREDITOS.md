# Créditos dos assets

Quase todo material de terceiros usado no jogo é **CC0 (domínio público)** —
pode ser usado, modificado e distribuído, inclusive comercialmente, sem
exigência de atribuição. As exceções são a fonte do site (SIL Open Font
License, que permite uso comercial e pede que a licença acompanhe a fonte) e
os ícones do Font Awesome (CC BY 4.0). Os créditos abaixo são por gratidão e
pra facilitar achar a origem de cada coisa.

## Imagens

| Onde | Origem | Licença |
| --- | --- | --- |
| `terreno/*` (texturas de chão), `natureza/arvores/carvalho-*`, `natureza/arvores/pinheiro-*`, `natureza/decoracao/*` (exceto cactos, ossos, arbustos secos e pedras de deserto/neve), `edificios/casa-1…6`, `edificios/celeiro-2`, `edificios/celeiro-3`, `edificios/poco`, `edificios/mercado`, `edificios/deposito` | Recortados e ajustados da folha **`arte-fonte/tiles.png`** do projeto (material do próprio projeto) | do projeto |
| `edificios/madeireira`, `moinho`, `forte`, `industria`, `fundicao`, `hospital`, `pasto`, `torre-vigia`, `canteiro`, `mina-ferro`, `mina-ouro`, `tribo-fogueira`, `tribo-totem`, `tribo-tenda`, `tribo-cabana`, `tribo-pedras` | Redesenhados por código (`tools/arte/gerar_edificios6.py`, renderizador `iso3d.py` + sombreamento em faixas de `pintura.py`) imitando o estilo do poço/mercado/casas da folha **`arte-fonte/tiles.png`**; base de grama/terra, toco com machado, fardo de feno, feno solto, baú, banco e lampião recortados da própria folha (material do projeto) | do projeto |
| `edificios/silo`, `serraria`, `armazem-geral`, `pedreira`, `torre-arqueiros`, `torre-balista`, `quartel`, `ruinas`, `porto`, `ferraria`, `muralha-*`, `portao-*` | Desenhados por código (`tools/arte/gerar_edificios3.py` / `gerar_edificios5.py`, refeitos com o acabamento de `gerar_edificios6.py`: traço mais grosso, luz em faixas, pedras da muralha graúdas) no estilo da folha de tiles; barris, caixotes, toco com machado e pedrinhas recortados da própria folha (material do projeto) | do projeto |
| `natureza/montanhas/*`, `natureza/minerios/*` | Redesenhadas por código (`tools/arte/gerar_natureza4.py`): montanhas/colinas em blocos de rocha arredondados com neve e grama, pedregulhos de minério — no estilo da folha `arte-fonte/tiles.png` (material do projeto) | do projeto |
| cactos, ossos, arbustos secos, pedras de deserto/neve | Pixel art gerada por código para este projeto | do projeto |
| `animais/*` (ovelha, vaca, galinha, coelho, cervo, cabra, camelo, lobo, urso, javali, raposa, cavalo, porco, pato, bisão, escorpião — 4 quadros cada) | Pixel art gerada por código para este projeto | do projeto |
| `personagens/campones-1…6`, `guerreiro-*`, `arqueiro-*`, `lanceiro-*`, `curandeiro-*`, `tribal-*` | Recortados de `arte-fonte/personagens/referencia-classes-racas.png` (material do projeto), com quadros de caminhada gerados a partir do quadro parado | do projeto |
| `personagens/minerador-*`, `lenhador-*`, `fazendeiro-*` | Camponeses do projeto recoloridos por código (roupa de cada ofício) | do projeto |
| `personagens/cavaleiro-*` | Montado por código: o cavalo de `animais/cavalo.png` + o tronco do guerreiro, com sela | do projeto |
| `personagens/explorador-*`, `pescador-*`, `ferreiro-*`, `construtor-*`, `besteiro-*` | Pixel art desenhada por código no mesmo formato dos outros personagens | do projeto |
| `site/*` (capturas da página inicial) | Capturas do próprio jogo; `evolucao-1/2` são as capturas antigas de `História/` | do projeto |

## Sons

| Onde | Origem | Licença |
| --- | --- | --- |
| `sons/interface/*` (clique, abrir, fechar, confirmar, erro, colocar, concluído, notificação, selecionar) | [Interface Sounds](https://kenney.nl/assets/interface-sounds) — Kenney | CC0 |
| `sons/ambiente/passaros.ogg` | [Forest quiet atmosphere with some birds](https://freesound.org/s/414098/) — felix.blume (Freesound) | CC0 |
| `sons/ambiente/grilos.ogg` | [Crickets (close recording)](https://freesound.org/s/476672/) — felix.blume (Freesound) | CC0 |
| `sons/ambiente/vento.ogg` | [Wind on bushes…](https://freesound.org/s/711106/) — felix.blume (Freesound) | CC0 |
| `sons/ambiente/chuva.ogg` | [Soft rain on a tile roof](https://freesound.org/s/466241/) — richwise (Freesound) | CC0 |
| `sons/ambiente/tempestade.ogg` | [Rain and Thunder Ambience Tübingen](https://freesound.org/s/369547/) — Sheyvan (Freesound) | CC0 |
| `sons/ambiente/riacho.ogg` | [Relaxing River Sound](https://freesound.org/s/722875/) — IceVFX (Freesound) | CC0 |
| `sons/efeitos/*` (machado, picareta, martelo, enxada, serrote, espada, golpe, flecha, moedas, animais, trovão, dano, sino, trompa de guerra, tambor, grito e grunhidos das tribos, balista, impactos, desmoronamento, cura, salvar/carregar...) | Sintetizados por código para este projeto | do projeto |
| `sons/musica/dia.ogg`, `sons/musica/noite.ogg` | Música ambiente gerativa (alaúde, flauta, pad e baixo) composta e renderizada por código para este projeto | do projeto |

As gravações de ambiente vieram já cortadas em loop do projeto
[funcoder/omarchy-ambient](https://github.com/funcoder/omarchy-ambient)
(cujo `CREDITS.md` lista as gravações originais do Freesound, todas CC0) e
foram re-emendadas e normalizadas pra este jogo.

## Fontes

| Onde | Origem | Licença |
| --- | --- | --- |
| `fontes/pixelify-sans.woff` (títulos do site) | [Pixelify Sans](https://github.com/google/fonts/tree/main/ofl/pixelifysans) — Stefie Justprince, via Google Fonts; recortada pra latim | SIL Open Font License 1.1 (`fontes/OFL-pixelify-sans.txt`) |

## Ícones

[Font Awesome Free](https://fontawesome.com/) — ícones sob CC BY 4.0,
código sob MIT (ver `node_modules/@fortawesome/fontawesome-free/LICENSE.txt`).
