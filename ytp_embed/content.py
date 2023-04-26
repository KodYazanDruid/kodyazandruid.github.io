import os, re, json

absolute_path = os.path.dirname(__file__)
raw = os.path.join(absolute_path, 'ytp_raw_embed_links.txt')
refined = os.path.join(absolute_path, 'ytp_iframes.json')
with open(raw, 'r', encoding='utf8') as f:
    raw_links = [satir.strip() for satir in f.readlines()]

def refine(raw):
    text = re.sub(r'width="\d+" height="\d+"', r'class="embed-video"', raw)
    text = re.sub(r' frameborder="(\d+)"', '', text)
    return text

def jsonify(text):
    json_text = ({"embed_link": text})
    return refine(json.dumps(json_text, indent=4))

with open (refined, 'w', encoding='utf8') as f:
    f.write(jsonify(raw_links[0]))



""" created = 0
for i in range(len(raw_links)):
    file_name = 'video_'+str(i)+'.json'
    if os.path.exists(os.path.join(refined, file_name)):
        continue
    with open(os.path.join(refined, file_name), 'w', encoding='utf8') as f:
        f.write(jsonify(refine(raw_links[i])))
    created += 1
    if created == len(raw_links):
        break """
