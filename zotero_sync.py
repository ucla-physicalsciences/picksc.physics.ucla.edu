import json
import datetime

def parse_date_parts(in_date):
    if len(in_date[0])==3:
        year, month, day = in_date[0]
    if len(in_date[0])==2:
        year, month = in_date[0]
        day=1
    return datetime.date(year=int(year),month=month,day=day)

def parse_authors(author_dict):
    author_list = [f"{author['given']} {author['family']}" for author in author_dict]
    return ", ".join(author_list)

with open("/home/almanzam/PICKSC Group Publications.json") as f:
    bib = json.load(f)

for bibentry in bib:
    bibentry['issued']['date'] = parse_date_parts(bibentry['issued']['date-parts'])
    bibentry['authorlist'] = parse_authors(bibentry['author'])

bib.sort(key=lambda x: x['issued']['date'], reverse=True)

base_str = """
              <h6>
                <b>
                  {}
                </b>
                <span class="" style3=""="">
                  <a href="https://doi.org/{}">[online]</a>
                </span>
                <br>
                {}
                </br>
                {} {}, {} ({})
              </h6>\n"""
arXiv_str = """
              <h6>
                <b>
                  {}
                </b>
                <span class="" style3=""="">
                  <a href="https://doi.org/{}">[online]</a>
                </span>
                <span class="" style3=""="">
                  <a href="https://doi.org/10.48550/{}">[arXiv]</a>
                </span>
                <br>
                {}
                </br>
                {} {}, {} ({})
              </h6>\n"""

def formatter(bibentry):
    if 'archive' in bibentry.keys():
        title = bibentry['title']
        doi = bibentry['DOI']
        arXiv = bibentry['archive'].replace(':','.')
        authorlist = bibentry['authorlist']
        journal = bibentry['container-title']
        if 'volume' in bibentry.keys():
            volume = bibentry['volume']
        else:
            volume=''
        page = bibentry['page']
        year = bibentry['issued']['date'].year

        return arXiv_str.format(title, doi, arXiv, authorlist, journal, volume, page, year)
    else:
        title = bibentry['title']
        doi = bibentry['DOI']
        authorlist = bibentry['authorlist']
        journal = bibentry['container-title']
        if 'volume' in bibentry.keys():
            volume = bibentry['volume']
        else:
            volume=''
        page = bibentry['page']
        year = bibentry['issued']['date'].year

        return base_str.format(title, doi, authorlist, journal, volume, page, year)

with open('formatted_pubs.txt', mode='w', encoding='utf-8') as f:
    year_header = 2024
    for bibentry in bib:
        year = bibentry['issued']['date'].year
        if year < year_header:
            year_header = year
            f.write(f'<h5>{year}</h5>\n')
        f.write(formatter(bibentry))

